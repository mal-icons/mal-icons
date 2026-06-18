import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-mark-pen-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMarkPenFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.95 2.39L21.61 8.05C22 8.44 22 9.07 21.61 9.46L13.83 17.24L11.71 17.95L10.29 19.36C9.9 19.75 9.27 19.75 8.88 19.36L4.64 15.12C4.25 14.73 4.25 14.09 4.64 13.7L6.05 12.29L6.76 10.17L14.54 2.39C14.93 2 15.56 2 15.95 2.39ZM16.66 5.93L10.29 12.29L11.71 13.7L18.07 7.34L16.66 5.93ZM4.28 16.89L7.11 19.71L5.7 21.13L1.45 19.71L4.28 16.89Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMarkPenFill;
