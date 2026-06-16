import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-donut-large",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDonutLarge {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M452-83Q294-95 187.5-209T81-480q0-158 106.5-271.5T452-877v102q-115 11-193 95t-78 200q0 116 78 200.5T452-185v102Zm60 0v-102q106-8 180.5-83.5T779-450h100q-11 149-114.5 253T512-83Zm267-427q-11-106-86-181.5T512-776v-102q148 11 252 115t115 253H779Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDonutLarge;
