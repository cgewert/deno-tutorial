// Since Deno 1.38.0 Deno supports cronjobs.
// See: https://crontab.guru/ for cronjob syntax.

const jobName = "My Cronjob";
const jobPattern = "* * * * *";

const cronjob = () => {
  console.log(`${jobName} was triggered!`);
};

Deno.cron(jobName, jobPattern, cronjob);
console.log("Cronjob will not block code execution!");
