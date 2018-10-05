Feature: Test Nightmare Upload
    * Choose File to Upload

    Scenario: Choose File to Upload
        Given Go to page "https://www.html5rocks.com/en/tutorials/file/dndfiles/"
        When Choose file "testUpload.txt"
        Then Get file list "testUpload.txt"