import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-tablet-mac",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssTabletMac {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-40v-880h720v880H120Zm60-210h600v-520H180v520Zm0 150h600v-90H180v90Zm0-730h600v-30H180v30Zm300.18 715q12.83 0 21.33-8.68 8.5-8.68 8.5-21.5 0-12.82-8.68-21.32-8.68-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.68-8.5 21.5 0 12.83 8.68 21.33 8.68 8.5 21.5 8.5ZM180-830v-30 30Zm0 730v-90 90Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssTabletMac;
