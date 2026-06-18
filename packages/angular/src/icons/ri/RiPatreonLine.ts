import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-patreon-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiPatreonLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 17C10.86 17 7.5 13.64 7.5 9.5C7.5 5.36 10.86 2 15 2C19.14 2 22.5 5.36 22.5 9.5C22.5 13.64 19.14 17 15 17ZM15 15C18.04 15 20.5 12.54 20.5 9.5C20.5 6.46 18.04 4 15 4C11.96 4 9.5 6.46 9.5 9.5C9.5 12.54 11.96 15 15 15ZM2 2H7V22H2V2ZM4 4V20H5V4H4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiPatreonLine;
