import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-app-promo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssAppPromo {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M636-518 480-362 324-518l42-42 84 84v-204h60v204l84-84 42 42ZM398-125h164v-40H398v40ZM200-40v-880h560v880H200Zm60-150v90h440v-90H260Zm0-60h440v-520H260v520Zm0-580h440v-30H260v30Zm0 640v90-90Zm0-640v-30 30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssAppPromo;
