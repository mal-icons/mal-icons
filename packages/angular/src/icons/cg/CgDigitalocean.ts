import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-digitalocean",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgDigitalocean {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 6C8.69 6 6 8.69 6 12H1C1 5.92 5.92 1 12 1C18.08 1 23 5.92 23 12C23 18.08 18.08 23 12 23V18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6Z","fill":"currentColor"}],["path",{"d":"M7 18V13H12V18H7Z","fill":"currentColor"}],["path",{"d":"M3 18V22H7V18H3Z","fill":"currentColor"}],["path",{"d":"M3 18H1V16H3V18Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgDigitalocean;
