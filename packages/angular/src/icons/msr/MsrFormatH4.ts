import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-format-h4",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFormatH4 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M129.82-280Q117-280 108.5-288.62T100-310v-340q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T160-650v140h180v-140q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T400-650v340q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T340-310v-140H160v140q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Zm620 0Q737-280 728.5-288.62T720-310v-100H550q-12.75 0-21.37-8.62T520-440v-210q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T580-650v180h140v-180q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T780-650v180h50q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T830-410h-50v100q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFormatH4;
