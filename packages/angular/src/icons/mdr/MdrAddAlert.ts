import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-add-alert",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAddAlert {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 22c1.1 0 2-0.9 2-2h-4c0 1.10.9 2 2 2zm7-5h-1v-7c0-2.79-1.91-5.14-4.5-5.8v-0.7c0-0.83-0.67-1.5-1.5-1.5s-1.50.67-1.5 1.5v0.7C7.91 4.86 6 7.21 6 10v7H5c-0.55 0-1 0.45-1 1s0.45 1 1 1h14c0.55 0 1-0.45 1-1s-0.45-1-1-1zm-5-4h-1v1c0 0.55-0.45 1-1 1s-1-0.45-1-1v-1h-1c-0.55 0-1-0.45-1-1s0.45-1 1-1h1v-1c0-0.550.45-1 1-1s1 0.45 1 1v1h1c0.55 0 1 0.45 1 1s-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAddAlert;
