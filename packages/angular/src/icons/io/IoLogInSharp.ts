import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-log-in-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoLogInSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M432,80H192a16,16,0,0,0-16,16V240H329.37l-64-64L288,153.37l91.31,91.32a16,16,0,0,1,0,22.62L288,358.63,265.37,336l64-64H176V416a16,16,0,0,0,16,16H432a16,16,0,0,0,16-16V96A16,16,0,0,0,432,80Z"}],["rect",{"x":"64","y":"240","width":"112","height":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoLogInSharp;
