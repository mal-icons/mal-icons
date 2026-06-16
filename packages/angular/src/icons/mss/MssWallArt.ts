import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-wall-art",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssWallArt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M81-80v-640h240l160-160 160 160h240v640H81Zm60-60h680v-520H141v520Zm113-100h460L572-427 446-260l-92-114-100 134Zm446.12-210Q721-450 735.5-464.62q14.5-14.62 14.5-35.5Q750-521 735.38-535.5q-14.62-14.5-35.5-14.5Q679-550 664.5-535.38q-14.5 14.62-14.5 35.5Q650-479 664.62-464.5q14.62 14.5 35.5 14.5ZM387-720h188l-94-94-94 94ZM141-140v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssWallArt;
