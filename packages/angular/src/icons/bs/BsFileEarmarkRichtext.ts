import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-file-earmark-richtext",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFileEarmarkRichtext {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"}],["path",{"d":"M4.5 12.5A0.50.5 0 0 1 5 12h3a0.50.5 0 0 1 0 1H5a0.50.5 0 0 1-0.5-0.5m0-2A0.50.5 0 0 1 5 10h6a0.50.5 0 0 1 0 1H5a0.50.5 0 0 1-0.5-0.5m1.64-3.71 1.330.89 1.85-1.85a0.250.25 0 0 1 0.29-0.05l1.890.97V8.5a0.50.5 0 0 1-0.50.5H5a0.50.5 0 0 1-0.5-0.5V8s1.54-1.27 1.64-1.21M6.25 6a0.750.75 0 1 0 0-1.50.750.75 0 0 0 0 1.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFileEarmarkRichtext;
