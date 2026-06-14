import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-low-battery",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcLowBattery {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#CFD8DC","d":"M34,44H14c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h20c1.1,0,2,0.9,2,2v34C36,43.1,35.1,44,34,44z"}],["path",{"fill":"#CFD8DC","d":"M28,13h-8c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1v7C29,12.6,28.6,13,28,13z"}],["path",{"fill":"#8BC34A","d":"M34,44H14c-1.1,0-2-0.9-2-2v-9h24v9C36,43.1,35.1,44,34,44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcLowBattery;
