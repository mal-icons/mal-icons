import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-genaifill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrGenaifill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.9 12.86C19.79 13.08 19.79 14.35 18.9 14.57C15.07 15.52 12.09 18.51 11.14 22.33C10.92 23.22 9.65 23.22 9.43 22.33C8.48 18.51 5.5 15.52 1.67 14.57C0.78 14.35 0.78 13.08 1.67 12.86C5.5 11.91 8.48 8.93 9.43 5.1C9.65 4.21 10.92 4.21 11.14 5.1C12.09 8.93 15.07 11.91 18.9 12.86Z","fill":"currentColor"}],["path",{"d":"M22.68 5.09C23.11 5.19 23.11 5.81 22.68 5.9C20.79 6.32 19.32 7.79 18.91 9.67C18.81 10.1 18.19 10.1 18.1 9.67C17.68 7.79 16.21 6.32 14.33 5.9C13.9 5.81 13.9 5.19 14.33 5.09C16.21 4.68 17.68 3.21 18.1 1.32C18.19 0.89 18.81 0.89 18.91 1.32C19.32 3.21 20.79 4.68 22.68 5.09Z","fill":"currentColor"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrGenaifill;
