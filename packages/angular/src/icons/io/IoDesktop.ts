import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-desktop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoDesktop {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16,352a48.05,48.05,0,0,0,48,48H197.88l-4,32H144a16,16,0,0,0,0,32H368a16,16,0,0,0,0-32H318.12l-4-32H448a48.05,48.05,0,0,0,48-48V304H16Zm240-16a16,16,0,1,1-16,16A16,16,0,0,1,256,336Z"}],["path",{"d":"M496,96a48.05,48.05,0,0,0-48-48H64A48.05,48.05,0,0,0,16,96V288H496Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoDesktop;
