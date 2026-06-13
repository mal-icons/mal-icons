import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-bus-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoBusSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M400,64H112a16,16,0,0,0,0,32H400a16,16,0,0,0,0-32Z","fill":"none"}],["path",{"d":"M424,32H88A24,24,0,0,0,64,56V416a32,32,0,0,0,16,27.71V480h72V448H360v32h72V443.71A32,32,0,0,0,448,416V56A24,24,0,0,0,424,32ZM175.82,371.47a32,32,0,1,1-35.3-35.29A32.09,32.09,0,0,1,175.82,371.47ZM240,288H96V128H240ZM256,96H96.46L96,64H416l-0.46,32H256Zm16,32H416V288H272Zm64.18,236.53a32,32,0,1,1,35.3,35.29A32.09,32.09,0,0,1,336.18,364.53Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoBusSharp;
