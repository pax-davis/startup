# GoalGlider - CSS Styling Phase

## Getting Started

Now that you have learned the basics of CSS, it's time to style your startup application. The application doesn't have to do anything functional yet, but it should visually resemble what your final application will look like. This includes styling of placeholder data that will eventually be populated by user login, application data, and real-time WebSocket updates.

## Development Notes

- Used Live Server in VS Code to preview changes.
- Structured layout styled using Flexbox for responsiveness.
- Navigation, header, and footer styled consistently.
- Placeholder elements (e.g., user name, motivational quote, live feed) styled to stand out.
- Used browser dev tools to debug layout issues.
- Styles written in a modular and reusable way in `style.css`.

## Deployment

To deploy:
```bash
./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s startup
```
Example:
```bash
./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s startup
```

## Grading Checklist

- [x] Proper structure and layout (header, footer, main body)
- [x] Styled navigation elements
- [x] Responsive layout that adjusts on window resize
- [x] Placeholder content styled to reflect final UI
- [x] GitHub repo linked in the footer of the application
- [x] Notes and documentation updated
