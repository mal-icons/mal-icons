import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-sports-esports",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSportsEsports {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m59-200 79.25-560H823l78 560H773L643-330H317L187-200H59Zm97-55 134.71-135H669l135 135h29l-63.21-445H190l-63 445h29Zm544-185q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12Zm-85-130q16 0 28-12t12-28q0-16-12-28t-28-12q-16 0-28 12t-12 28q0 16 12 28t28 12ZM300-445h50v-75h75v-50h-75v-75h-50v75h-75v50h75v75Zm180-33Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSportsEsports;
