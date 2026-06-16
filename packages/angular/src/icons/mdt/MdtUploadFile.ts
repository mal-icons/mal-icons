import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-upload-file",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtUploadFile {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 4H6v16h12V9h-5V4zm3 11h-3v4h-2v-4H8l4.01-4L16 15z","opacity":".3"}],["path",{"d":"M14 2H6c-1.1 0-1.990.9-1.99 2L4 20c0 1.10.89 2 1.99 2H18c1.1 0 2-0.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"}],["path",{"d":"M8 15h3v4h2v-4h3l-3.99-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtUploadFile;
