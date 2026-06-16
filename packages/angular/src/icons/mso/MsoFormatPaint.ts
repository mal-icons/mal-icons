import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-format-paint",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFormatPaint {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M437-80q-24 0-42-17.62T377-140v-200H220q-24 0-42-18t-18-42v-303q0-55 39.66-96T295-840h505v440q0 24-18 42t-42 18H583v200q0 24.75-18 42.38T523-80h-86ZM220-554h520v-226h-56v171h-60v-171h-71v85h-60v-85H295q-32 0-53.5 23T220-703v149Zm0 154h520v-94H220v94Zm0-94v94-94Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFormatPaint;
