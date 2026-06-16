import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-video-settings",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoVideoSettings {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M513-140H140q-24 0-42-18t-18-42v-540q0-24 18-42t42-18h694q24 0 42 18t18 42v246h-60v-246H140v540h373v60ZM395-297v-346l263 173-263 173ZM730-40l-5-48q-20-6-41-17.5T650-131l-42 20-35-54 38-30q-5-23-5-41.5t5-41.5l-38-30 35-55 42 20q13-12 34-24t41-18l5-49h60l6 49q20 6 41 18t34 24l42-20 35 55-38 30q5 23 5 41.5t-5 41.5l38 30-35 54-42-20q-13 14-34 25.5T796-88l-6 48h-60Zm30-95q44 0 73-29t29-73q0-44-29-73t-73-29q-44 0-73 29t-29 73q0 44 29 73t73 29Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoVideoSettings;
