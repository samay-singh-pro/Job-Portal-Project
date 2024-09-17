import cron from "node-cron";
import { User } from "../models/userSchema.js";
import { Job } from "../models/jobSchema.js";
import { sendEmail } from "../utils/sendEmail.js";
export const newsLetterCron = () => {
  cron.schedule("*/1 * * * *", async () => {
    const jobs = await Job.find({ newsLetterSent: false });
    for (let job of jobs) {
      try {
        const filteredUsers = await User.find({
          $or: [
            { "niches.firstNiche": job.jobNiche },
            { "niches.secondNiche": job.jobNiche },
            { "niches.thirdNiche": job.jobNiche },
          ],
        });

        for (const user of filteredUsers) {
          const subject = `Job alert: ${job.title} in ${job.jobNiche} is available now`;
          const message = `hey ${user.name} \n\nGreat news! look out the new job opening for you, A job opening that fits your skills has been posted. the position is for a ${job.title} with ${job.companyName}, and they are looking to hire immidiately. \n\nJob details **Position:** ${job.title}\n **Company:** ${job.companyName} \n **Location** ${job.location}\n- **Salary** ${job.salary}\n\n hurry up as these openings are likely to filled up quickly. Best of luck! \n\n\Best regards, \nInforming Team
           `;
          sendEmail({
            email: user.email,
            subject,
            message,
          });
        }
        job.newsLettersSent = true;
        await job.save();
      } catch (error) {
        console.log("error in node cron catch block");
        return next(console.error(error || "some error in Cron."));
      }
    }
  });
};
