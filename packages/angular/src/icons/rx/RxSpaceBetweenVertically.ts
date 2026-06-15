import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-space-between-vertically",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxSpaceBetweenVertically {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 0.5C1 0.22 1.22 0 1.5 0H13.5C13.78 0 14 0.22 14 0.5C14 0.78 13.78 1 13.5 1L9 1V5C9 5.55 8.55 6 8 6H7C6.45 6 6 5.55 6 5V1H1.5C1.22 1 1 0.78 1 0.5ZM7 9C6.45 9 6 9.45 6 10V14H1.5C1.22 14 1 14.22 1 14.5C1 14.78 1.22 15 1.5 15H13.5C13.78 15 14 14.78 14 14.5C14 14.22 13.78 14 13.5 14H9V10C9 9.45 8.55 9 8 9H7Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxSpaceBetweenVertically;
