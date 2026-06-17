import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-file-earmark-code",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFileEarmarkCode {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"}],["path",{"d":"M8.65 6.65a0.50.5 0 0 1 0.71 0l2 2a0.50.5 0 0 1 0 0.71l-2 2a0.50.5 0 0 1-0.71-0.71L10.29 9 8.65 7.35a0.50.5 0 0 1 0-0.71m-1.29 0a0.50.5 0 0 0-0.71 0l-2 2a0.50.5 0 0 0 0 0.71l2 2a0.50.5 0 0 0 0.71-0.71L5.71 9l1.65-1.65a0.50.5 0 0 0 0-0.71"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFileEarmarkCode;
