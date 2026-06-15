import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-cloud-upload",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlCloudUpload {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M763.02 259.97C718.4 141.54 622.47 66.53 477.55 66.53c-184.38 0-313.39 136.91-324.48 315.54C64.18 410.50 501.180 603.9c0 125.74 98.85 231.97 215.82 231.97h92.45c17.66 0 32-14.34 32-32 0-17.68-14.34-32-32-32h-92.45c-82.3 0-152.83-76.91-152.83-167.97 0-80.46 56.42-153.06 127.18-165.22l29.04-5.01-2.58-29.33-0.24-0.37c0-155.87 102.58-273.44 261.15-273.44 127.1 0 198.51 62.62 231.54 169.44l6.85 22.03 23.060.5c118.88 2.5 223.1 98.95 223.1 218.77 0 109.06-72.27 230.59-181.7 230.59h-73.12c-17.66 0-32 14.34-32 32 0 17.68 14.34 32 32 32l72.88-0.09c160-4.22 243.34-157.07 243.34-294.49 0-147.71-115.76-265.74-260.48-281.31zM535.99 514.94c-0.18-0.19-0.24-0.35-0.35-0.51l-8.1-8.46c-4.43-4.69-10.34-7.01-16.24-6.98-5.9-0.05-11.78 2.29-16.29 6.98l-8.1 8.46c-0.160.16-0.190.35-0.340.51L371.07 642.68c-8.94 9.34-8.94 24.46 0 33.84l8.06 5.47c8.95 9.34 23.44 6.32 32.37-3.02l68.11-75.93v322.43c0 17.66 14.34 32 32 32s32-14.34 32-32V603.34l70.37 77.63c8.94 9.34 23.41 12.37 32.34 3.03l8.06-5.47c8.95-9.38 8.95-24.5 0-33.84z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlCloudUpload;
