import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-punch-clock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPunchClock {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-80v-640h130v-200h460v200h130v640H120Zm190-640h340v-140H310v140ZM180-140h600v-520H180v520Zm299.95-65Q399-205 342-262.05t-57-138Q285-481 342.05-538t138-57Q561-595 618-537.95t57 138Q675-319 617.95-262t-138 57Zm0-50Q540-255 582.5-297.45q42.5-42.45 42.5-102.5Q625-460 582.55-502.5q-42.45-42.5-102.5-42.5Q420-545 377.5-502.55q-42.5 42.45-42.5 102.5Q335-340 377.45-297.5q42.45 42.5 102.5 42.5ZM526-326l-66-66v-108h40v92l54 54-28 28Zm-46-74Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPunchClock;
