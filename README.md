# cpsc-1520-workbook

src Folder
This folder is where you will place practice and demo material for each class.

⚠️ Do NOT use this repository for any assignments that are worth marks. ⚠️

If there is a sample in your instructor's workbook that you want to pull into your own workbook, the easiest way to do that is through a Node package called tiged. Here's an example of how to use it to grab a subdirectory from your instructor's workbook:

Note: The following is based on using the pnpm dlx command. If you are using regular node/npm, you should use npx instead of pnpm dlx.

$ pnpm dlx tiged --disable-cache --force DMIT-1234/Instructor-Workbook/src/008/demo-events ./src/008/demo-events
//\____________________________________/ \_______________________________________________/ \___________________/
//      |- Command to run               |- Instructor's source folder (on GitHub)        |- Your local destination folder
A more detailed explanation of the command would look like this:

$ pnpm dlx tiged --disable-cache --force DMIT-1234/Instructor-Workbook/src/008/demo-events ./src/008/demo-events
//\______/ \___/ \_____________/ \_____/ \_______/ \_________________/ \_________________/ \___________________/
// |    |          |          |       |             |                     |                     |- Destination folder
// |    |          |          |       |             |                     |- Instructor's sub-folder
// |    |          |          |       |             |- Name of Instructor's Repo
// |    |          |          |       |- GitHub Organization or User
// |    |          |          |- Force overwrite of existing files
// |    |          |- Disable caching of repo (so you grab the latest version)
// |    |- Command to run
// |- pnpm dlx is a Node package runner (alternative to npx)
