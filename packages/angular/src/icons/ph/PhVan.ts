import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-van",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhVan {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M254.07,114.79,208.53,61.73A16,16,0,0,0,196.26,56H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A8,8,0,0,0,254.07,114.79ZM230.59,112H176V72h20.26ZM104,112V72h56v40ZM88,72v40H32V72ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm112,0a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm31-24a32,32,0,0,0-62,0H111a32,32,0,0,0-62,0H32V128H240v56Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhVan;
