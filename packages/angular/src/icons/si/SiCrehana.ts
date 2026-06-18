import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-crehana",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCrehana {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12,0C5.37,0,0,5.37,0,12c0,6.63,5.37,12,12,12s12-5.37,12-12C24,5.37,18.63,0,12,0z M17.94,9.84v7.92h-3.96 v-3.89h-3.89v3.83H6.13v-3.96h3.83V9.84H6.06V5.95h3.96v3.9h3.97V5.95h3.96V9.84z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCrehana;
