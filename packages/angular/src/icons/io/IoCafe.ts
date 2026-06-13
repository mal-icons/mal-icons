import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-cafe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoCafe {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M432,64H96A16,16,0,0,0,80,80V272a96.11,96.11,0,0,0,96,96H288a96.11,96.11,0,0,0,96-96V192h18a62.07,62.07,0,0,0,62-62V96A32,32,0,0,0,432,64Zm0,66a30,30,0,0,1-30,30H384V96h48Z"}],["path",{"d":"M400,400H64a16,16,0,0,0,0,32H400a16,16,0,0,0,0-32Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoCafe;
