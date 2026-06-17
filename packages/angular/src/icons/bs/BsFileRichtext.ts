import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-file-richtext",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFileRichtext {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 4.25a0.750.75 0 1 1-1.5 0 0.750.75 0 0 1 1.5 0m-0.86 1.54 1.330.89 1.85-1.85a0.250.25 0 0 1 0.29-0.05l1.890.97V7.5a0.50.5 0 0 1-0.50.5H5a0.50.5 0 0 1-0.5-0.5V7s1.54-1.27 1.64-1.21M5 9a0.50.5 0 0 0 0 1h6a0.50.5 0 0 0 0-1zm0 2a0.50.5 0 0 0 0 1h3a0.50.5 0 0 0 0-1z"}],["path",{"d":"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFileRichtext;
