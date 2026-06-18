import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-lineageos",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLineageos {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.65 12.06a2.4 2.4 0 0 0-1.80.8l-0.14-0.05a17.8 17.8 0 0 0-2.87-0.86 4.81 4.81 0 0 0-9.62 0h-0.13a17.75 17.75 0 0 0-2.760.84l-0.140.05a2.4 2.4 0 1 0 0.56 1.07 16.6 16.6 0 0 1 2.58-0.78 4.81 4.81 0 0 0 9.36 0 16.56 16.56 0 0 1 2.580.77 2.4 2.4 0 1 0 2.39-1.84zM2.41 15.66a1.2 1.2 0 1 1 1.2-1.2 1.2 1.2 0 0 1-1.2 1.2zm9.62 0a3.61 3.61 0 1 1 3.61-3.61 3.61 3.61 0 0 1-3.61 3.61zm9.62 0a1.2 1.2 0 1 1 1.2-1.2 1.2 1.2 0 0 1-1.2 1.2zm-7.81-3.61a1.8 1.8 0 1 1-1.8-1.8 1.8 1.8 0 0 1 1.8 1.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLineageos;
