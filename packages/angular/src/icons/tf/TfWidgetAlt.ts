import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-widget-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfWidgetAlt {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 0h1v1h-1v-1zM5 0h-1v1h1v-1zM7 0h-1v1h1v-1zM9 0h-1v1h1v-1zM11 0h-1v1h1v-1zM13 0h-1v1h1v-1zM14 1h1v-1h-1v1zM2 17h1v-1h-1v1zM4 17h1v-1h-1v1zM6 17h1v-1h-1v1zM8 17h1v-1h-1v1zM10 17h1v-1h-1v1zM12 17h1v-1h-1v1zM14 17h1v-1h-1v1zM16 0v1h1v-1h-1zM16 3h1v-1h-1v1zM16 5h1v-1h-1v1zM16 7h1v-1h-1v1zM16 9h1v-1h-1v1zM16 11h1v-1h-1v1zM16 13h1v-1h-1v1zM16 15h1v-1h-1v1zM16 17h1v-1h-1v1zM0 1h1v-1h-1v1zM0 3h1v-1h-1v1zM0 5h1v-1h-1v1zM0 7h1v-1h-1v1zM0 9h1v-1h-1v1zM0 11h1v-1h-1v1zM0 13h1v-1h-1v1zM0 15h1v-1h-1v1zM0 17h1v-1h-1v1zM8.5 10.04l-4.14-4.15-0.71 0.71 4.85 4.85 4.86-4.85-0.71-0.71-4.15 4.15z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfWidgetAlt;
