import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-centercode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCentercode {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 z M 16 5 C 22.07 5 27 9.94 27 16 C 27 22.07 22.07 27 16 27 C 9.94 27 5 22.07 5 16 C 5 9.94 9.94 5 16 5 z M 13.2 9 C 10.85 11.26 10.38 16.59 11.81 22.87 C 14.63 23.5 18.72 21.8 22.89 18.43 C 24.03 13.68 16.33 10.14 13.2 9 z M 16 14 C 17.11 14 18 14.9 18 16 C 18 17.11 17.11 18 16 18 C 14.9 18 14 17.11 14 16 C 14 14.9 14.9 14 16 14 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCentercode;
