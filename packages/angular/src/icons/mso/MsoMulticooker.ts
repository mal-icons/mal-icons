import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-multicooker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoMulticooker {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M320-760v-60q0-24.75 17.63-42.37T380-880h200q24.75 0 42.38 17.63T640-820v60h140q24.75 0 42.38 17.63T840-700v520q0 24.75-17.62 42.38T780-120H180q-24.75 0-42.37-17.62T120-180v-520q0-24.75 17.63-42.37T180-760h140ZM180-180h600v-390H680v110q0 24.75-17.62 42.38T620-400H340q-24.75 0-42.37-17.62T280-460v-110H180v390Zm129.82-70Q297-250 288.5-258.67q-8.5-8.68-8.5-21.5 0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5Zm170 0Q467-250 458.5-258.67q-8.5-8.68-8.5-21.5 0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5Zm170 0Q637-250 628.5-258.67q-8.5-8.68-8.5-21.5 0-12.82 8.68-21.32 8.68-8.5 21.5-8.5 12.83 0 21.33 8.68 8.5 8.68 8.5 21.5 0 12.83-8.68 21.33-8.68 8.5-21.5 8.5ZM340-460h280v-110H340v110ZM180-630h600v-70H180v70Zm200-130h200v-60H380v60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoMulticooker;
