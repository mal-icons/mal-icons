import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-nordic-walking",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNordicWalking {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m168-40 80-350h41L209-40h-41Zm110 0 117-589-102 46v133h-60v-173l191-81q26-11 59.5-6t50.5 31l42 66q26 42 72.5 72.5T753-510v60q-67 0-121-31t-96-91l-41 156 92 83v293h-60v-240l-108-98-79 338h-62Zm262-707q-30 0-51.5-21.5T467-820q0-30 21.5-51.5T540-893q30 0 51.5 21.5T613-820q0 30-21.5 51.5T540-747ZM713-40v-350h40v350h-40Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNordicWalking;
