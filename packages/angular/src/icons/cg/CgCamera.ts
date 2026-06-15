import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-camera",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgCamera {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 4.5V6.5H12V7.5H3C1.34 7.5 0 8.84 0 10.5V16.5C0 18.16 1.34 19.5 3 19.5H15C16.57 19.5 17.86 18.29 17.99 16.75L24 17.5V9.5L17.99 10.25C17.86 8.71 16.57 7.5 15 7.5H14V5.5C14 4.95 13.55 4.5 13 4.5H4ZM18 12.27V14.73L22 15.23V11.77L18 12.27ZM16 10.5C16 9.95 15.55 9.5 15 9.5H3C2.45 9.5 2 9.95 2 10.5V16.5C2 17.05 2.45 17.5 3 17.5H15C15.55 17.5 16 17.05 16 16.5V10.5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgCamera;
