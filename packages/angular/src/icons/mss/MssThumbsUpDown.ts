import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-thumbs-up-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssThumbsUpDown {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0-400v-351l209-209 39 44-34 156h266v102L371-400H0Zm60-60h270l90-209v-31H139l28-133L60-725v265ZM751 0l-39-44 34-156H480v-102l109-258h371v351L751 0Zm42-127 107-108v-265H630l-90 209v31h281l-28 133ZM60-460v-265 265Zm840 225v-265 265Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssThumbsUpDown;
