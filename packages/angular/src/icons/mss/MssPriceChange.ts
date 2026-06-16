import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-price-change",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPriceChange {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm0 0v-520 520Zm184-54h60v-45h48q16 0 25.5-12t9.5-27v-114.74q0-16.25-9.5-27.75T432-512H297v-69h170v-60h-83v-45h-60v45h-48q-16 0-27.5 12T237-600.88v113.77Q237-471 248.5-461.5T276-452h131v73H237v60h87v45Zm326-35 60-60H590l60 60Zm-60-272h120l-60-60-60 60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPriceChange;
