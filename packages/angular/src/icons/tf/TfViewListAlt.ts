import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-view-list-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfViewListAlt {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 0v4h12v-4h-12zM16 3h-10v-2h10v2zM5 10h12v-4h-12v4zM6 7h10v2h-10v-2zM5 16h12v-4h-12v4zM6 13h10v2h-10v-2zM0 4h4v-4h-4v4zM1 1h2v2h-2v-2zM0 10h4v-4h-4v4zM1 7h2v2h-2v-2zM0 16h4v-4h-4v4zM1 13h2v2h-2v-2z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfViewListAlt;
