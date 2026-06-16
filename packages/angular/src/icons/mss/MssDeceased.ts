import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-deceased",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssDeceased {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M455-137q-29-84-70-126.5T259-335q4 48 18 84.5t36 58.5q17 17 32.5 26.5T378-150q17 6 36 8.5t41 4.5Zm50 0q97-9 143-55t55-143q-43 15-75 33t-52 38q-15 15-25.5 29.5T532-205q-8 15-14 31.5T505-137Zm-25-363q75 0 127.5-52.5T660-680v-91l-87 74-93-112-93 112-87-74v91q0 75 52.5 127.5T480-500ZM440-80q-100 0-170-70t-70-170v-80q71-1 134 29t106 81v-152.25Q354-456 297-523t-57-157v-223l140 121 100-121 100 121 140-121v223q0 90-57 156.95Q606-456.09 520-442v152q43-51 106-81t134-29v80q0 100-70 170T520-80h-80Zm40-575Zm124 419Zm-247 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssDeceased;
