import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-notes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiNotes {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.83 4.06c-0.11-0.09-0.24-0.14-0.39-0.12l-11 1.25c-0.250.03-0.440.24-0.440.5v10.32c-1.65 0-3 1.12-3 2.5s1.35 2.5 3 2.5 3-1.12 3-2.5v-7.61l6-0.62v3.73c-1.65 0-3 1.12-3 2.5s1.35 2.5 3 2.5 3-1.12 3-2.5v-12.07c0-0.14-0.06-0.28-0.17-0.37z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiNotes;
