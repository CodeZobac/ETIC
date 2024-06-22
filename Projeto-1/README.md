# CloudSync

## Objective

CloudSync is a web application that provides cloud storage functionality. Users can upload, download, and manage files and folders while monitoring their storage usage. The application ensures secure file handling and efficient storage management.

## Organization of the Project

The project is organized into several key components, each responsible for different functionalities:

1. **Models**: Defines the data structure and relationships.
   - `models.py`: Contains `Profile`, `Folder`, and `File` models.

2. **Views**: Handles the logic for HTTP requests.
   - `views.py`: Contains views for file uploads, deletions, and listing files.
   - `views_api.py`: Contains API views for storage usage data.

3. **Forms**: Handles form data for file uploads.
   - `forms.py`: Defines the `FileUploadForm`.

4. **Serializers**: Transforms data for API responses.
   - `serializers.py`: Defines the `ProfileSerializer`.

5. **URLs**: Maps URLs to views.
   - `urls.py`: Contains URL patterns for the application.

6. **Tests**: Contains test cases to ensure the correctness of the application.
   - `tests.py`: Defines test cases for file model functionality.

7. **Admin**: Configures the Django admin interface.
   - `admin.py`: Registers `Profile`, `File`, and `Folder` models.

8. **Static Files**: Includes static assets like CSS and images.
   - `openFolder.html`: HTML template for the folder view with embedded JavaScript for file deletion.

9. **Docker and Makefile**: Used for setting up the development environment.
   - `Dockerfile`: Defines the Docker image for the application.
   - `docker-compose.yaml`: Defines services for Docker Compose.
   - `Makefile`: Contains commands for setting up and managing the project.

## Installing Method

To set up the project, follow these steps:

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed
- [Make](https://www.gnu.org/software/make/) installed

### Steps

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
    ```

2. **Install using Makefile**

    ```bash
    make run
    ```
### Overview
With this command all the prerequesites for the project will be set up.
To stop the aplication use ctrl+c in the terminal

### Conclusion
By following the steps outlined in this README, you can set up and run the CloudSync application, allowing you to manage files and monitor storage usage effectively.























