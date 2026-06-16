import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-directions-run",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDirectionsRun {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M535-40v-239l-108-99-42 188-265-55 11-56 199 40 73-369-100 47v134h-60v-175l164-69q32-14 45.5-17.5T480-714q20 0 35.5 8.5T542-680l42 67q26 42 71 73t105 31v60q-67 0-119.5-31T543-573l-39 158 91 84v291h-60Zm5-714q-30 0-51.5-21.5T467-827q0-30 21.5-51.5T540-900q30 0 51.5 21.5T613-827q0 30-21.5 51.5T540-754Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDirectionsRun;
