import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-patreon-logo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhPatreonLogo {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M176,40a64,64,0,1,0,64,64A64.07,64.07,0,0,0,176,40Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,176,152ZM80,40H64A16,16,0,0,0,48,56V208a16,16,0,0,0,16,16H80a16,16,0,0,0,16-16V56A16,16,0,0,0,80,40Zm0,168H64V56H80V208Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhPatreonLogo;
