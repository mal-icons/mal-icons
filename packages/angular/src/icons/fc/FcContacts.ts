import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-contacts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcContacts {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#FF7043","d":"M38,44H12V4h26c2.2,0,4,1.8,4,4v32C42,42.2,40.2,44,38,44z"}],["path",{"fill":"#BF360C","d":"M10,4h2v40h-2c-2.2,0-4-1.8-4-4V8C6,5.8,7.8,4,10,4z"}],["circle",{"fill":"#AB300B","cx":"26","cy":"20","r":"4"}],["path",{"fill":"#AB300B","d":"M33,30c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V30z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcContacts;
