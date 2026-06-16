import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-format-bold",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFormatBold {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.6 10.79c0.97-0.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H8c-0.55 0-1 0.45-1 1v12c0 0.550.45 1 1 1h5.78c2.07 0 3.96-1.69 3.97-3.770.01-1.53-0.85-2.84-2.15-3.44zM10 6.5h3c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFormatBold;
