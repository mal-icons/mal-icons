import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fa-z",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FaZ {
  readonly viewBox = "0 0 384 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 64C0 46.3 14.3 32 32 32l320 0c12.4 0 23.7 7.2 29 18.4s3.6 24.5-4.4 34.1L100.3 416 352 416c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-12.4 0-23.7-7.2-29-18.4s-3.6-24.5 4.4-34.1L283.7 96 32 96C14.3 96 0 81.7 0 64z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FaZ;
