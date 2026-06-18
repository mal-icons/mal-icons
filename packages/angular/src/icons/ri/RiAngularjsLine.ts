import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-angularjs-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAngularjsLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.52 16.65L18.01 16.38L19.13 6.67L12 4.12L4.87 6.67L5.99 16.38L6.46 16.64L12 4.21L17.52 16.65ZM16.42 17.26H15.63L14.46 14.34H9.52L8.35 17.26H7.58L12 19.71L16.42 17.26ZM12 2L21.3 5.32L19.88 17.63L12 22L4.12 17.63L2.7 5.32L12 2ZM13.7 12.54L12 8.45L10.3 12.54H13.7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAngularjsLine;
