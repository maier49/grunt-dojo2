import * as fs from 'fs';
import * as path from 'path';
import ITask = grunt.task.ITask;
import IMultiTask = grunt.task.IMultiTask;

export = function (grunt: IGrunt) {
	grunt.registerMultiTask('rename', function (this: IMultiTask<void>) {
		this.files.forEach(function (file: grunt.file.IFileMap) {
			if (grunt.file.isFile(file.src[0])) {
				grunt.file.mkdir(path.dirname(file.dest));
			}
			fs.renameSync(file.src[0], file.dest);
			(<any> grunt)['verbose'].writeln('Renamed ' + file.src[0] + ' to ' + file.dest);
		});
		grunt.log.writeln('Moved ' + this.files.length + ' files');
	});
};
