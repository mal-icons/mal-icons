import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-package",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcPackage {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["path",{"fill":"#FF9800","d":"M38,42H10c-2.2,0-4-1.8-4-4V10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28C42,40.2,40.2,42,38,42z"}],["path",{"fill":"#8A5100","d":"M29.5,16h-11c-0.8,0-1.5-0.7-1.5-1.5v0c0-0.8,0.7-1.5,1.5-1.5h11c0.8,0,1.5,0.7,1.5,1.5v0 C31,15.3,30.3,16,29.5,16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcPackage;
