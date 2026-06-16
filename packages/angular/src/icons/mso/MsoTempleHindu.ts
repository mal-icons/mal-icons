import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-temple-hindu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTempleHindu {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-80v-440h60v80h107l122-404v-76h60v80h101v-80h60v71l123 409h107v-80h60v440H530v-210H430v210H80Zm255-440h290l-30-100H365l-30 100Zm48-160h194l-30-100H413l-30 100ZM140-140h230v-210h220v210h230v-240H667l-24-80H317l-24 80H140v240Zm340-320Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTempleHindu;
